import MKBox from "components/MKBox";

const View = ({ children, height = "auto", ...rest }) => {
  return (
    <MKBox width="100%" position="relative" borderRadius="xl" shadow="lg" {...rest}>
      <MKBox width="100%" p={3}>
        <MKBox
          bgColor="grey-100"
          width="100%"
          height={height}
          borderRadius="xl"
          sx={{ overflowX: "hidden", overflowY: "scroll" }}
        >
          {children}
        </MKBox>
      </MKBox>
    </MKBox>
  );
};

export default View;
