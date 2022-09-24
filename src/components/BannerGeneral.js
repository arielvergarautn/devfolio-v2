//Animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import Wave from '../components/Wave'

function BannerGeneral({title, subTitle}) {
  return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show'>
            <div className="banner-general">
                <div className="title">
                    <div className="hide">
                        <motion.h2 variants={titleAnim}>{title}</motion.h2>
                    </div>
                    <div className="hide">
                        <motion.h4 variants={titleAnim}>
                            <span>{subTitle}</span>
                        </motion.h4>
                    </div>
                </div>
                <Wave />
            </div>
        </motion.div>
  )
}

export default BannerGeneral