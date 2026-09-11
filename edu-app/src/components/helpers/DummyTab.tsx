import { DummyTabProps } from "@/typings";
import { triggerHaptics } from "@/utils/trigger-haptics";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { styles } from "@/stylesheet";

const DummyTab: React.FC<DummyTabProps> = ({
  animationProgress,
  colors: _,
  onPress: onDummyPress,
}) => {
  const onPress = (): void => {
    triggerHaptics("soft");
    onDummyPress!();
  };

  const animatedIconStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationProgress.value,
      [0, 0.25, 0.4],
      [1, 0.5, 0],
      Extrapolation.CLAMP
    );
    const counterScale = interpolate(
      animationProgress.value,
      [0, 0.5, 1],
      [1, 2, 1],
      Extrapolation.CLAMP
    );
    return {
      opacity,
      transform: [{ scale: counterScale }],
    };
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.tab}>
      <Animated.View style={[styles.dummyIcon, animatedIconStyle]}>
        <Ionicons name="chevron-expand" size={24} color="white" />
      </Animated.View>
    </TouchableOpacity>
  );
};

export { DummyTab };
