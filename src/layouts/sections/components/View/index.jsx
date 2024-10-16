import PropTypes from "prop-types";
import MKBox from "components/MKBox";

function View({ children, height, ...rest }) {
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
}

// Setting default props for the View
View.defaultProps = {
  height: "auto",
};

// Typechecking props for the View
View.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default View;
