import React, { useContext } from "react";
import { View, Button } from "react-native";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    state: { recording },
    startRecording,
    stopRecording,
  } = useContext(LocationContext);

  return (
    <View>
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </View>
  );
};

export default TrackForm;
