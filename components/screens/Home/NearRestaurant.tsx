import styled from "styled-components/native";
import SectionTitle from "../../../common/SectionTitle";
import Square from "../../../common/Cards/Square";
import { useRef } from "react";
import { Animated, ScrollView, useWindowDimensions } from "react-native";

function NearRestaurant() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { width: windowWidth } = useWindowDimensions();

  return (
    <NearView>
      <SectionTitle title="Nearest Restaurant" clickHandle={() => {}} />

      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={2}
      >
        <Row>
          {dummyData.map((d) => (
            <Square key={d.img} img={d.img} name={d.name} distance={d.distance} />
          ))}
        </Row>
      </ScrollView>
    </NearView>
  );
}

export default NearRestaurant;

const NearView = styled.View``;

const Row = styled.View`
  flex-direction: row;
  padding: 20px 0;
  gap: 20px;
`;

const dummyData = [
  {
    img: require("../../../assets/temp/res1.png"),
    name: "Vegan Restro",
    distance: "12 min",
  },
  {
    img: require("../../../assets/temp/res2.png"),
    name: "Good Foodo",
    distance: "20 min",
  },
  {
    img: require("../../../assets/temp/res3.png"),
    name: "Healthy Food",
    distance: "5 min",
  },
  {
    img: require("../../../assets/temp/res4.png"),
    name: "Smart Restro",
    distance: "19 min",
  },
];
