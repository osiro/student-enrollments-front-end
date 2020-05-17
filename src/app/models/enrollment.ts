import { Subject } from './subject';

export interface Enrollment {
  id: string;
  studentId: string;
  startAt: string;
  endAt: string;
  durationInMinutes: number;
  durationCode: string;
  subject: Subject;
}
