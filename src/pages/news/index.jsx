import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  View,
  Pressable,
  StyleSheet,
} from "react-native";
import { apiGet } from "../../api/request";
import { WingBlank, Card, WhiteSpace } from "@ant-design/react-native";

const DEFAULT_AVATAR =
  "https://p9-passport.byteacctimg.com/img/user-avatar/8066733f1e29e64bc8fd982783883b1b~300x300.image";

const News = ({ navigation }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    apiGet({ url: "/data" }).then((res) => {
      const _list = res.data
        .filter(
          (item) =>
            item.title_highlight &&
            item.content_highlight &&
            item?.result_model?.article_info?.cover_image
        )
        .map((item) => ({
          title: item.title_highlight,
          content: item?.content_highlight,
          img: item?.result_model?.article_info?.cover_image,
        }));
      setList(_list);
    });
  }, []);

  return (
    <ScrollView>
      {list.map((item, idx) => (
        <NewItem key={idx} item={item} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

const NewItem = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={(e) => navigation.navigate({ name: "Search", params: item })}
    >
      <View>
        <WingBlank size="md">
          <Card>
            <Card.Header title={item.title}></Card.Header>
            <Card.Body>
              <Image source={{ uri: DEFAULT_AVATAR }} style={styles.img} />
            </Card.Body>
            <Card.Footer content={<Text>{item.content}</Text>}></Card.Footer>
          </Card>
        </WingBlank>
        <WhiteSpace size="md" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default News;
