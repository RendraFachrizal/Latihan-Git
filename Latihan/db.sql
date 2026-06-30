create TABLE mahasiswa (
    nim int(10) primary key,
    nama char (255) not null,
    prodi char (255) not null,
    jenisKelamin ENUM ('Laki - laki', 'Perempuan'),
    alamat text not null,
    noHP char(25) not null
);

INSERT INTO mahasiswa(nim, nama, prodi, jenisKelamin, alamat,noHP)
VALUES(123456, "Muhammad Rendra Fachrizal", "TIK", "Laki - laki", "Samarinda", "087716515904");

UPDATE mahasiswa
SET noHp = "087716515902"
WHERE NIM = 123456;

DELETE FROM mahasiswa
WHERE NIM = 123456

INSERT INTO mahasiswa(nim, nama, prodi, jenisKelamin, alamat,noHP)
VALUES(123654, "Rendra Fachrizal", "TIK", "Laki - laki", "Samarinda", "087716515904");

INSERT INTO mahasiswa(nim, nama, prodi, jenisKelamin, alamat,noHP)
VALUES(123465, "Fachrizal", "TIK", "Laki - laki", "Samarinda", "087716515904");


INSERT INTO mahasiswa()
VALUES(123579, "Rendra", "TIK", "Perempuan", "Kutai Kartanegara", "087716515900");