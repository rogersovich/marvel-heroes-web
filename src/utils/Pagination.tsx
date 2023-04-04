import { usePagination, DOTS } from "./usePagination"

import { Button, IconButton } from "@chakra-ui/react"

import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

interface Props {
  onPageChange: (page: any) => void
  totalCount: number
  pageSize: number
  siblingCount?: number
  currentPage: number
}

const Pagination = ({
  onPageChange,
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
}: Props) => {

  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <>
      <div>
        <IconButton
          icon={<TbChevronLeft />}
          variant={"ghost"}
          fontSize={20}
          isDisabled={currentPage === 1}
          onClick={onPrevious}
          aria-label=""
        />

        {paginationRange.map((pageNumber: number | string, key: number) => {
          if (pageNumber === DOTS) {
            return <Button isDisabled variant={"ghost"} key={key}>...</Button>
          }

          return (
            <Button
              key={key}
              variant={pageNumber === currentPage ? "solid" : "ghost"}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          )
        })}

        <IconButton
          icon={<TbChevronRight />}
          variant={"ghost"}
          fontSize={20}
          isDisabled={currentPage === lastPage}
          onClick={onNext}
          aria-label=""
        />
      </div>
    </>
  )
}

export default Pagination
