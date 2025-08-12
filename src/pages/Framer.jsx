import { motion } from "framer-motion";
function Framer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "aliceblue",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Framer
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.5, backgroundColor: "red" }}
        whileTap={{ scale: 0.8, backgroundColor: "yellow" }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
          margin: "50px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></motion.div>
      <motion.div
        drag={true}
        dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
        style={{
          width: 100,
          height: 100,
          backgroundColor: "hotpink",
          margin: "50px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        드래그
      </motion.div>
    </>
  );
}

export default Framer;
