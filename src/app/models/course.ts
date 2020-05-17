import { Enrollment } from './enrollment';

export interface Course {
  startOn: string;
  endOn: string;
  exactDate: string;
  weekday: string;
  room: string;
  roonNumber: string;
  campus: string;
  isHoliday: string;
  enrollments: Enrollment[];
}
