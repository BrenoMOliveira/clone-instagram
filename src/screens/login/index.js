import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import Button from "../../components/button";

export default function Login({ navigation }) {
  const [text, onChangeText] = useState(null);
  const [number, onChangeNumber] = useState(null);

  return (
    <LinearGradient
      colors={['#FCF2F2', '#69A1E2', '#EBFAF2']}
      locations={[0.0, 0.5, 1.0]}
      style={{ flex: 1 }}
    >
      <View className="flex-1 mt-5">
        <StatusBar style="dark" translucent />
        <View className="p-5">
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View className="flex items-center">
          <View className="my-20">
            <Image
              className="w-20 h-20"
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/023/986/555/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png',
              }}
            />
          </View>
          <View className="w-full">
            <SafeAreaView>
              <TextInput
                className="h-10 m-3 p-6 rounded-md border border-gray-400 bg-white"
                onChangeText={onChangeText}
                value={text}
                placeholder="Nome de usuário, email ou número de celular"
                placeholderTextColor={'#a19f9f'}
              />
              <TextInput
                className="h-10 m-3 p-6 rounded-md border border-gray-400 bg-white"
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
                placeholder="Senha"
                placeholderTextColor={'#a19f9f'}
              />
            </SafeAreaView>
            <View className="px-2">
              <Button
                text="Entrar"
                action={() => navigation.navigate("home")}
              />
            </View>
            <View className="items-center">
              <Text className="font-semibold text-sm text-black">
                Esqueceu a senha?
              </Text>
            </View>
          </View>
        </View>
        <KeyboardAvoidingView
          className="m-auto absolute bottom-2 right-0 left-0 mx-4"
          behavior={Platform.OS === "ios" ? "padding" : null}
          enabled
        >
          <View className="flex flex-row justify-center pt-2">
            <View className="items-center w-full">
              <Pressable
                className="rounded-full py-2 px-4 my-3 h-12 text-center items-center w-full border border-blue-600"
              >
                <Text className="text-blue-600 text-center text-lg font-semibold my-auto">
                  Criar nova conta
                </Text>
              </Pressable>
              <View>
                <Image
                  className="w-20 h-10"
                  source={{
                    uri: 'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Meta-Black-Wordmark-900x0.png',
                  }}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
}
