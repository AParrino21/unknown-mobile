import React from "react";
import { StyleSheet } from "react-native";
import { AvatarCompProps } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AvatarComp: React.FC<AvatarCompProps> = ({
  color,
  avatar,
  handleChooseAvatar,
}) => {
  const [selected, setSelected] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (avatar === color) {
      setSelected(true);
    } else {
      setSelected(false)
    }
  }, [avatar]);

  return (
    <MaterialCommunityIcons
      style={[styles.avatarIcons, selected && styles.activeBg]}
      name="alien"
      size={25}
      color={color}
      onPress={() => handleChooseAvatar(color)}
    />
  );
};

export default AvatarComp;

const styles = StyleSheet.create({
  avatarIcons: {
    padding: 2,
    borderRadius: 15,
    overflow: "hidden",
  },
  activeBg: {
    backgroundColor: "#ccc3e3",
  },
});
