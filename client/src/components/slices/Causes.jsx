import React from "react";
import Section from "../../layouts/Section";
import Flex from "../../layouts/Flex";
import Card2 from "../Card/Card2";
import Heading from "../shared/Heading";
import Grid from "../../layouts/Grid";
import ProgressWrapper from "../shared/ProgressWrapper";
const Causes = () => {
  return (
    <Section>
      <Heading title="Our Causes" subTitle="Need Help For" alignment="centered">
        Join hands with us to accomplish all these projects of serving humanity
        and making this world a better place to live.
      </Heading>
      <Grid smCol={2}>
        <Card2>
          <ProgressWrapper progress={66} />
        </Card2>
        <Card2>
          <ProgressWrapper progress={50} />
        </Card2>
        <Card2>
          <ProgressWrapper progress={50} />
        </Card2>
      </Grid>
    </Section>
  );
};

export default Causes;
