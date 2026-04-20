import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiFirebase, 
  SiExpo, 
  SiVite,
  SiNodedotjs,
  SiPostgresql
} from 'react-icons/si';
import { FaGithub, FaLinkedin, FaAws } from 'react-icons/fa';

export const Node = ({ size = 24, color = "#339933", ...props }) => (
  <SiNodedotjs size={size} color={color} {...props} />
);

export const SQL = ({ size = 24, color = "#4169E1", ...props }) => (
  <SiPostgresql size={size} color={color} {...props} />
);


export const Github = ({ size = 24, color = "currentColor", ...props }) => (
  <FaGithub size={size} color={color} {...props} />
);

export const ReactLogo = ({ size = 24, color = "#61dafb", ...props }) => (
  <SiReact size={size} color={color} {...props} />
);

export const AWS = ({ size = 24, color = "#FF9900", ...props }) => (
  <FaAws size={size} color={color} {...props} />
);


export const Firebase = ({ size = 24, color = "#FFCA28", ...props }) => (
  <SiFirebase size={size} color={color} {...props} />
);

export const JS = ({ size = 24, color = "#F7DF1E", ...props }) => (
  <SiJavascript size={size} color={color} {...props} />
);

export const TS = ({ size = 24, color = "#3178C6", ...props }) => (
  <SiTypescript size={size} color={color} {...props} />
);

export const ViteLogo = ({ size = 24, color = "#646CFF", ...props }) => (
  <SiVite size={size} color={color} {...props} />
);

export const Expo = ({ size = 24, color = "#000020", ...props }) => (
  <SiExpo size={size} color={color} {...props} />
);

export const Linkedin = ({ size = 24, color = "#0A66C2", ...props }) => (
  <FaLinkedin size={size} color={color} {...props} />
);
