import React from "react";
import { useRouter } from "expo-router";
import { Snackbar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from "react-native";
import useDaftarDenganEmailKataSandi from "@/hooks/backend/useDaftarDenganEmailKataSandi";

export default function Daftar() {
  const pengarah = useRouter();
  const gambar = require("@/assets/layarDaftar.png");

  const {
    email,
    setEmail,
    kataSandi,
    namaDepan,
    setNamaDepan,
    setKataSandi,
    nomorTelepon,
    namaBelakang,
    pesanSnackbar,
    setNamaBelakang,
    setNomorTelepon,
    tampilkanSnackbar,
    setTampilkanSnackbar,
    perlihatkanKataSandi,
    setPerlihatkanKataSandi,
    daftarDenganEmailKataSandi,
    sedangMemuatDaftarDenganEmailKataSandi,
  } = useDaftarDenganEmailKataSandi();

  return (
    <ScrollView
      className="px-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Bagian Teks */}
      <View className="items-center w-full">
        <Text
          className="text-2xl text-center mb-2"
          style={{ fontFamily: "RobotoBlack" }}
        >
          Daftar Akun Baru
        </Text>
      </View>

      {/* Bagian Gambar */}
      <Image source={gambar} className="w-80 h-80 mb-5" />

      {/* Bagian Formulir */}
      <View className="w-full">
        <View className="bg-white rounded-lg flex-row items-center mb-4 shadow-md px-4 py-3">
          <Ionicons name="person-outline" size={24} color="#03314B" />
          <TextInput
            placeholder="Masukkan Nama Depan"
            value={namaDepan}
            onChangeText={setNamaDepan}
            className="ml-4 flex-1 text-lg text-[#0F172A]"
            placeholderTextColor="#94A3B8"
          />
        </View>

        <View className="bg-white rounded-lg flex-row items-center mb-4 shadow-md px-4 py-3">
          <Ionicons name="person-outline" size={24} color="#03314B" />
          <TextInput
            placeholder="Masukkan Nama Belakang"
            value={namaBelakang}
            onChangeText={setNamaBelakang}
            className="ml-4 flex-1 text-lg text-[#0F172A]"
            placeholderTextColor="#94A3B8"
          />
        </View>

        <View className="bg-white rounded-lg flex-row items-center mb-4 shadow-md px-4 py-3">
          <Ionicons name="mail-outline" size={24} color="#03314B" />
          <TextInput
            placeholder="Masukkan Email"
            value={email}
            onChangeText={setEmail}
            className="ml-4 flex-1 text-lg text-[#0F172A]"
            placeholderTextColor="#94A3B8"
          />
        </View>

        <View className="bg-white rounded-lg flex-row items-center shadow-md px-4 mb-4 py-3">
          <Ionicons name="lock-closed-outline" size={24} color="#03314B" />
          <TextInput
            placeholder="Masukkan Kata Sandi"
            value={kataSandi}
            onChangeText={setKataSandi}
            secureTextEntry={!perlihatkanKataSandi}
            className="ml-4 flex-1 text-lg text-[#0F172A]"
            placeholderTextColor="#94A3B8"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setPerlihatkanKataSandi(!perlihatkanKataSandi)}
          >
            <Ionicons
              name={perlihatkanKataSandi ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#03314B"
            />
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-lg flex-row items-center shadow-md px-4 py-3">
          <Ionicons name="call-outline" size={24} color="#03314B" />
          <TextInput
            placeholder="Masukkan Nomor Telepon"
            value={nomorTelepon}
            onChangeText={setNomorTelepon}
            inputMode="numeric"
            className="ml-4 flex-1 text-lg text-[#0F172A]"
            placeholderTextColor="#94A3B8"
          />
        </View>
      </View>

      {/* Bagian Teks */}
      <View className="items-center w-full">
        <Text
          className="text-sm text-center my-2"
          style={{ fontFamily: "Roboto" }}
        >
          Dengan mendaftar, saya menyetujui{" "}
          <Text
            className="text-[#03314B]"
            style={{ fontFamily: "RobotoBlack" }}
          >
            Syarat & Ketentuan
          </Text>{" "}
          yang berlaku pada aplikasi.
        </Text>
      </View>

      {/* Bagian Tombol */}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => daftarDenganEmailKataSandi()}
        disabled={
          sedangMemuatDaftarDenganEmailKataSandi ||
          !email ||
          !namaDepan ||
          !kataSandi ||
          !namaBelakang ||
          !nomorTelepon
        }
        className={`mt-2 w-full ${
          sedangMemuatDaftarDenganEmailKataSandi ||
          !email ||
          !namaDepan ||
          !kataSandi ||
          !namaBelakang ||
          !nomorTelepon
            ? "opacity-50"
            : ""
        }`}
      >
        <View className="bg-[#03314B] h-12 rounded-lg items-center justify-center shadow-lg">
          <Text
            className="text-lg text-white ml-2"
            style={{ fontFamily: "RobotoBold" }}
          >
            {sedangMemuatDaftarDenganEmailKataSandi ? (
              <ActivityIndicator color="white" size="small" />
            ) : (
              "Daftar"
            )}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Bagian Belum Punya Akun */}
      <View className="flex-row justify-center items-center w-full mt-3">
        <Text
          className="text-sm text-center text-[#94A3B8]"
          style={{ fontFamily: "Roboto" }}
        >
          Sudah punya akun?
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => pengarah.push("/login")}
        >
          <Text
            className="text-[#03314B] ml-1"
            style={{ fontFamily: "RobotoBold" }}
          >
            Masuk
          </Text>
        </TouchableOpacity>
      </View>

      <Snackbar
        visible={tampilkanSnackbar}
        onDismiss={() => setTampilkanSnackbar(false)}
        duration={3000}
      >
        <Text
          className="text-center text-white"
          style={{ fontFamily: "RobotoBold" }}
        >
          {pesanSnackbar}
        </Text>
      </Snackbar>
    </ScrollView>
  );
}
