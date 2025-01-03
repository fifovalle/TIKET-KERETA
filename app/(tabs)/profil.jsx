import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useKeluar from "@/hooks/backend/useKeluar";
import { formatNomorTelpon } from "@/constants/formatNomorTelpon";
import useTampilkanKeranjang from "@/hooks/backend/useTampilkanKeranjang";
import { useTampilkanPengguna } from "@/hooks/backend/useTampilkanPengguna";

export default function Profil() {
  const pengarah = useRouter();

  const { jumlahKeranjang } = useTampilkanKeranjang();
  const { keluar, sedangMemuatKeluar } = useKeluar();
  const { pengguna, sedangMemuatTampilkanPengguna } = useTampilkanPengguna();

  if (sedangMemuatTampilkanPengguna) {
    return (
      <View className="flex-1 mt-10 justify-center items-center">
        <ActivityIndicator size="large" color="#03314B" />
        <Text
          className="mt-4 text-lg text-black"
          style={{ fontFamily: "RobotoBold" }}
        >
          Memuat Data Pengguna...
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Bagian Kepala */}
      <View className="h-36 bg-[#03314B] p-4">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => pengarah.push("/screens/keranjang")}
          className="p-2 mt-4 items-end"
        >
          <Ionicons name="cart-outline" size={28} color="white" />

          {jumlahKeranjang > 0 && (
            <View className="absolute bg-red-500 rounded-full h-5 w-5 items-center justify-center top-0 right-0">
              <Text className="text-white text-xs">{jumlahKeranjang}</Text>
            </View>
          )}
        </TouchableOpacity>

        <View className="flex items-center justify-between w-full">
          <View>
            <Text
              className="text-xl text-center text-[#FFFFFF]"
              style={{ fontFamily: "RobotoBlack" }}
            >
              {pengguna?.Nama_Depan + " " + pengguna?.Nama_Belakang}
            </Text>
            <Text className="text-sm text-center text-[#94A3B8]">
              {pengguna?.Email || "Tidak Ada"}
            </Text>
          </View>
        </View>
      </View>

      {/* Informasi Data Diri */}
      <ScrollView className="p-4">
        {/* Nama Depan */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="person-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Nama Depan</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              {pengguna?.Nama_Depan || "Tidak Ada"}
            </Text>
          </View>
        </View>

        {/* Nama Belakang */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="person-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Nama Belakang</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              {pengguna?.Nama_Belakang || "Tidak Ada"}
            </Text>
          </View>
        </View>

        {/* Nomor HP */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="call-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Nomor HP</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              {formatNomorTelpon(pengguna?.Nomor_Telepon) || "Tidak Ada"}
            </Text>
          </View>
        </View>

        {/* Email */}
        <View className="bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md">
          <Ionicons name="mail-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-sm text-[#475569]">Email</Text>
            <Text className="text-lg text-[#0F172A] font-bold">
              {pengguna?.Email || "Tidak Ada"}
            </Text>
          </View>
        </View>

        {/* Keluar */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => keluar()}
          disabled={sedangMemuatKeluar}
          className={`bg-white rounded-lg p-4 flex-row items-center mb-4 shadow-md ${
            sedangMemuatKeluar ? "opacity-50" : ""
          }`}
        >
          <Ionicons name="log-out-outline" size={24} color="#03314B" />
          <View className="ml-4">
            <Text className="text-lg text-[#0F172A] font-bold">
              {sedangMemuatKeluar ? (
                <ActivityIndicator color="#03314B" size="small" />
              ) : (
                "Keluar"
              )}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
