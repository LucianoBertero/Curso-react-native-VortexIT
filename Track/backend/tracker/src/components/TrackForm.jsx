import React, { useContext } from "react";
import { View, Button } from "react-native";
import { Input } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";
import { stopLocationUpdatesAsync } from "expo-location";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter Name"
          onChange={changeName}
        ></Input>
      </Spacer>

      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack}></Button>
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackForm;
