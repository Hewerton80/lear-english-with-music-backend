export interface PaginatedResult<T> {
  docs: T[]
  total: number
  currentPage: number
  perPage: number
  lastPage: number
  prev: number
  next: number
}

type PaginateArgs = { currentPage?: number | string; perPage?: number | string }
type PaginateFunction = <T, K>(
  model: any,
  args?: K,
  options?: PaginateArgs
) => Promise<PaginatedResult<T>>

// export const createPaginator = (defaultOptions: PaginateArgs): PaginateFunction => {
//   return async (model, args: any = { where: undefined }, options) => {
//     const currentPage = Number(options?.currentPage || defaultOptions?.currentPage) || 1
//     const perPage = Number(options?.perPage || defaultOptions?.perPage) || 10

//     const skip = currentPage > 0 ? perPage * (currentPage - 1) : 0
//     const [total, docs] = await Promise.all([
//       model.count({ where: args.where }),
//       model.findMany({
//         ...args,
//         take: perPage,
//         skip,
//       }),
//     ])
//     const lastPage = Math.ceil(total / perPage)

//     return {
//       docs,
//       total,
//       lastPage,
//       currentPage,
//       perPage,
//       prev: currentPage > 1 ? currentPage - 1 : null,
//       next: currentPage < lastPage ? currentPage + 1 : null,
//     }
//   }
// }

interface IPaginateFunction<T, K> {
  model: any
  args?: K
  options?: PaginateArgs
}

export const prismaPagination = async <T, K>({
  model,
  args,
  options,
}: IPaginateFunction<T, K>) => {
  const currentPage = Number(options?.currentPage) || 1
  const perPage = Number(options?.perPage) || 25

  const skip = currentPage > 0 ? perPage * (currentPage - 1) : 0
  const [total, docs] = await Promise.all([
    model.count({ where: (args as any)?.where }),
    model.findMany({
      ...args,
      take: perPage,
      skip,
    }),
  ])
  const lastPage = Math.ceil(total / perPage)
  return {
    docs,
    total,
    lastPage,
    currentPage,
    perPage,
    prev: currentPage > 1 ? currentPage - 1 : null,
    next: currentPage < lastPage ? currentPage + 1 : null,
  } as PaginatedResult<T>
}
