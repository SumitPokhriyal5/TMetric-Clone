import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

const Achive = () => {
  return (
    <Grid
      w={"90%"}
      m={"auto"}
      mt={"20px"}
      mb={"20px"}
      templateColumns={{base:"repeat(2, 1fr)",sm:"repeat(3,1fr)",md:"repeat(7, 1fr)"}}
      gap={4}
    >
      <GridItem w="100%" h={"auto"}>
        <Image
          width={"80%"}
          m={"auto"}
          src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png"
          alt="Highly Rated software"
        />
      </GridItem>
      <GridItem w="100%" h={"auto"}>
        <Image
          width={"80%"}
          m={"auto"}
          src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png"
          alt="Software world"
        />
      </GridItem>
      <GridItem w="100%" h={"auto"}>
        <Image
          width={"80%"}
          m={"auto"}
          src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png"
          alt="Happiest Users"
        />
      </GridItem>
      <GridItem w="100%" h={"auto"}>
        <Image
          width={"80%"}
          m={"auto"}
          src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png"
          alt="High Performer"
        />
      </GridItem>
      <GridItem w="100%" h={"auto"}>
        <Image
          width={"80%"}
          m={"auto"}
          src="https://tmetric.com/media/cwnfzugf/icon-capterra-shortlist.png"
          alt="Capterra Shortlist 2022"
        />
      </GridItem>
      <GridItem w="100%" h={"auto"}>
        <Image
          width={"80%"}
          m={"auto"}
          src="https://tmetric.com/media/psxgf3r4/icon-software-advice-frontrunners.png"
          alt="Front runners 2022"
        />
      </GridItem>
      <GridItem display={"flex"} alignItems={"center"} w="100%" h={"auto"}>
        <Image
          width={"80%"}
          m={"auto"}
          src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg"
          alt="Get App"
        />
      </GridItem>
    </Grid>
  );
};

export default Achive;
