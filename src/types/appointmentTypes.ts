// src/types/appointmentTypes.ts

export type Hospital = {
    id: string;
    name: string;
    availability: string;
};

export type Branch = {
    id: string;
    name: string;
    availability: string;
};

export type Department = {
    id: string;
    name: string;
    availability: string;
};

export type Doctor = {
    id: string;
    name: string;
    availability: string;
    deptName: string;
    branchName: string;
    imageUrl?: string; // Optional property for image URL
};
