import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useLayoutEffect } from "react";

type IPagination = {
  pages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
const Pagination = ({ pages, currentPage, setCurrentPage }: IPagination) => {
  const router = useRouter();
  const handleNextPage = (page: number) => {
    router.replace({
      query: { ...router.query, pageNum: page },
    });
    setCurrentPage(page);
  };
  useLayoutEffect(() => {
    if (router.query?.pageNum) {
      setCurrentPage(Number(router.query?.pageNum as string));
    }
  }, [router.query.pageNum, setCurrentPage]);
  return (
    <Flex justifyContent={"center"}>
      {pages > 1 &&
        Array.from({ length: pages }, (_, index) => index + 1).map((item) => (
          <Button
            colorScheme={currentPage === item ? "orange" : "gray"}
            onClick={() => handleNextPage(item)}
            key={item}
            variant="ghost"
          >
            <Text>{item}</Text>
          </Button>
        ))}
    </Flex>
  );
};

export default Pagination;
