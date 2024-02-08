import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div>
      {/* {sidebar} */}
      <Sidebar />
      <section className="navbar">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Lakhan
          </motion.span>
          <div className="social">
            <a href="https://www.linkedin.com/in/lakhan-lal-7853a521a/">
              <img src="linkedIn.png" alt="" />
            </a>
            <a href="https://github.com/Lakhan3011">
              <img src="/Github.png" alt="" />
            </a>
            <a href="https://twitter.com/rajput_lakhan11">
              <img src="/X.png" alt="" />
            </a>
            <a href="https://leetcode.com/lakhanlal3011/">
              <img src="/LeetCodeLogo.png" alt="" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
