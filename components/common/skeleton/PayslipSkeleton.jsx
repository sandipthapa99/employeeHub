import { Center, Skeleton, VStack } from "native-base";
import React from "react";

const PayslipSkeleton = () => {
  return (
    <Center w="100%">
      <VStack
        w="100%"
        maxW="400"
        space={8}
        overflow="hidden"
        rounded="lg"
        background={"#fff"}
        padding={6}
        mt={6}
      >
        <Skeleton.Text px="4" />
      </VStack>
      <VStack
        w="100%"
        maxW="400"
        space={8}
        overflow="hidden"
        rounded="lg"
        background={"#fff"}
        padding={6}
        mt={4}
      >
        <Skeleton.Text px="4" />
      </VStack>
      <VStack
        w="100%"
        maxW="400"
        space={8}
        overflow="hidden"
        rounded="lg"
        background={"#fff"}
        padding={6}
        mt={4}
      >
        <Skeleton.Text px="4" />
      </VStack>
    </Center>
  );
};

export default PayslipSkeleton;
