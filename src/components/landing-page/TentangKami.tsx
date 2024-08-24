import React from "react";

const TentangKami = () => {
  return (
    <div className="flex w-full justify-center bg-white py-24">
      <div className="flex w-[1280px] flex-col gap-y-6">
        <div className="flex w-full justify-between text-base-dark">
          <h1 className="font-primary text-[64px] font-extrabold">
            Tentang Kami.
          </h1>
          <button className="font-secondary text-lg font-semibold hover:underline">
            Baca Selengkapnya
          </button>
        </div>
        <div className="font-base font-secondary text-lg text-black-light-3">
          <p>
            Organisasi ini bernama Himpunan Mahasiswa Teknik Computer –
            Informatika yang selanjutnya disebut HMTC.
          </p>
          <p>
            Tujuan HMTC adalah tercapainya kesempurnaan pendidikan dalam rangka
            membentuk pribadi mahasiswa yang bertaqwa kepada Tuhan Yang Maha
            Esa, memiliki sikap kecendekiawanan, integritas, kepekaan sosial,
            serta mampu menguasai dan mengembangkan Ilmu Pengetahuan dan
            Teknologi Informatika dan Komputer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TentangKami;
