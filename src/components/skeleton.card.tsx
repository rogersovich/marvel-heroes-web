import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import React from "react"

interface Props {
  col?: number
}

const SkeletonCard: React.FC<Props> = ({col = 4}) => {
  return (
    <Box
      padding="4"
      border="1px"
      borderColor={"gray.100"}
      borderRadius={"md"}
      bg="transparent"
    >
      <div className="grid-10 tw-gap-2">
        <div className="tw-col-span-2">
          <SkeletonCircle height="40px" width="40px" />
        </div>
        <div className="tw-col-span-8 fcc">
          <SkeletonText width="full" skeletonHeight="3" noOfLines={1} />
        </div>
      </div>
      <SkeletonText mt="4" noOfLines={col} spacing="4" skeletonHeight="3" />
    </Box>
  )
}

export default SkeletonCard
