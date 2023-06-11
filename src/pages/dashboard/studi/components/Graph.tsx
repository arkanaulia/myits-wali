import { Box } from '@chakra-ui/react';
import LineGraph from './Chart';

const SemesterPage = () => {
  const nilaiSemester = [3.75, 3.5, 3.45, 3.8, 3.9];
  const semesterLabels = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'];

  return (
    <Box w='full'>
      <LineGraph data={nilaiSemester} labels={semesterLabels} />
    </Box>
  );
};

export default SemesterPage;
