export interface Semester {
 semesterNumber?: string;
 sks?: string;
 ips?: number;
 listNilai?: ListNilai[];
}

interface ListNilai {
   id?: number;
   name?: string;
   description?: string;
   nilai?: string;
}
