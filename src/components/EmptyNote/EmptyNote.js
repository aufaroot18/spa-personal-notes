import Box from "../../presentations/Box/Box";
import Text from "../../presentations/Text/Text";

const EmptyNote = () => {
  return (
    <Box className="notes-list-empty">
      <Text className="">Catatan tidak ada</Text>
    </Box>
  );
};

export default EmptyNote;
