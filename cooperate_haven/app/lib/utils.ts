/**generate pagination */
export const generatePagination = (currentPage: number, totalPages: number) => {
  /**check for total number of pages available if it is less than 10
   * dont use ellipsis
   */

  if (totalPages <= 10) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  /**if current page is amoung the first 5, show the first 5 and ellipsis and the final pages */
  if (currentPage <= 5) {
    return [1, 2, 3, 4, 5, "...", totalPages - 1, totalPages]
  }

  /**if current page is amoung the last 5, show the first 5 and ellipsis and the final pages */
  if (currentPage >= totalPages - 5) {
    return [1, 2, "...", totalPages - 5, totalPages]
  }

  //   If the current page is somewhere in the middle,
  //   show the first page, an ellipsis, the current page and its neighbors,
  //   another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ]
}
