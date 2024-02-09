import React from 'react'
import {useState} from "react";
import StudentCard from '../components/StudentCard';

export const Topic = {
    Math: "Math",
    Biology: "Biology",
    Literature: "Literature",
    Chemistry: "Chemistry",
    Physics: "Physics",
    Music: "Music"
};

export const TopicList = [Topic.Math, Topic.Biology, Topic.Literature, Topic.Chemistry, Topic.Physics, Topic.Music];

export const Grade = { A: "A", B: "B", C: "C", D: "D", E: "E", F: "F" };

export const GradeList = [Grade.A, Grade.B, Grade.C, Grade.D, Grade.E, Grade.F];

export const defaultGradesData = [

    {
        id: 2,
        topic: Topic.Literature,
        grade: Grade.C
    },
    {
        id: 3,
        topic: Topic.Biology,
        grade: Grade.F
    },
    {
        id: 1,
        topic: Topic.Math,
        grade: Grade.A
    },];