export interface IPaginatedResult<DocsType> {
  docs: DocsType[]
  total: number
  currentPage: number
  perPage: number
  lastPage: number
  prev: number
  next: number
}

interface IPaginateArgs {
  currentPage?: number | string
  perPage?: number | string
}

interface IPaginateFunctionArgs<WhereInput, OrderInput> {
  model: any
  where?: WhereInput
  orderBy?: OrderInput
  paginationInput?: IPaginateArgs
}

export const prismaPagination = async <DocsType, WhereInput, OrderInput>({
  model,
  where,
  orderBy,
  paginationInput,
}: IPaginateFunctionArgs<WhereInput, OrderInput>) => {
  const currentPage = Number(paginationInput?.currentPage) || 1
  const perPage = Number(paginationInput?.perPage) || 25

  const skip = currentPage > 0 ? perPage * (currentPage - 1) : 0
  const totalPromise = model.count({ where })
  const docsPromise = model.findMany({
    where,
    orderBy,
    take: perPage,
    skip,
  })
  const [total, docs] = await Promise.all([totalPromise, docsPromise])
  const lastPage = Math.ceil(total / perPage)
  const paginatedResult: IPaginatedResult<DocsType> = {
    docs,
    total,
    lastPage,
    currentPage,
    perPage,
    prev: currentPage > 1 ? currentPage - 1 : null,
    next: currentPage < lastPage ? currentPage + 1 : null,
  }
  return paginatedResult
}
