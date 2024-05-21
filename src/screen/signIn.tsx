import { Center, Heading, ScrollView, Text, VStack } from "@gluestack-ui/themed";

import LogoSvg from '@assets/logo.svg';


export function SignIn() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1}} showsHorizontalScrollIndicator={false}>
        <VStack flex={1} px={3} py={5}>
            <Center mt={109} mb={76}>
                <LogoSvg/>
                <Heading mt={30} fontSize={"$4xl"}>marketspace</Heading>
                <Text fontSize={"$sm"}>Seu espaço de compra e venda</Text>
            </Center>
            <Center>
              
            </Center>
        </VStack>
    </ScrollView>
  );
}