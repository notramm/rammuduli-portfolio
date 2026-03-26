import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2023',
    title: 'ThakurCollege',
    subtitle: 'Bachelor of Science in Information Technology',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'Yoshops',
    subtitle: 'Frontend Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2023',
    title: 'FIS',
    subtitle: 'Associate',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]