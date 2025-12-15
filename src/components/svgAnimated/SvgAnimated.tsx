import classNames from "classnames/bind";
import styles from "./SvgAnimated.module.scss";

const cx = classNames.bind(styles);

type Point = [number, number];

type BlobConfig = {
  id: number;
  positions: Point[];
  duration: number;
  delay: number;
  scale: number;
  opacity: number;
};

const PATH_KEYFRAMES = [
  "M56.2,-65C70.3,-55.3,77.2,-35,78.7,-15.5C80.3,4.1,76.5,23,66.8,37.5C57.2,52,41.7,62,24.7,68.5C7.7,75,-10.9,77.9,-24.3,71.1C-37.7,64.3,-46,47.8,-46.5,33.4C-47,19,-39.7,6.6,-40.7,-10.6C-41.8,-27.9,-51.2,-50.1,-45.8,-61.3C-40.4,-72.5,-20.2,-72.7,0.5,-73.2C21.1,-73.8,42.2,-74.6,56.2,-65Z",
  "M36.9,-37.5C52,-31.3,71.3,-23.6,76.2,-11.2C81.1,1.3,71.5,18.5,58,25.6C44.5,32.7,27.1,29.7,14.4,30.2C1.8,30.7,-6.2,34.8,-21.1,38C-35.9,41.2,-57.8,43.6,-64.3,35.5C-70.9,27.5,-62.3,9,-56.9,-8C-51.4,-24.9,-49.2,-40.4,-40.2,-47.7C-31.3,-54.9,-15.6,-54,-2.4,-51.2C10.9,-48.3,21.8,-43.7,36.9,-37.5Z",
  "M56.8,-57.7C72.9,-54.2,84.8,-35.6,84.9,-17.5C85,0.5,73.4,18.1,61.4,32.1C49.4,46.2,36.9,56.6,24.3,57C11.7,57.4,-1.1,47.7,-10.1,39.4C-19.1,31,-24.4,24.1,-35.7,15.4C-47,6.7,-64.3,-3.9,-68.9,-18.1C-73.5,-32.4,-65.5,-50.4,-51.9,-54.4C-38.3,-58.4,-19.2,-48.2,0.6,-49C20.4,-49.7,40.7,-61.2,56.8,-57.7Z",
  "M34.8,-36.3C47.1,-31.1,60.4,-22.1,58.7,-13.1C56.9,-4.2,40.1,4.6,32.4,19.5C24.8,34.5,26.3,55.5,18.1,65C10,74.6,-7.9,72.7,-17.2,62.6C-26.4,52.6,-27,34.3,-32.8,20.7C-38.6,7.1,-49.5,-1.8,-54.6,-15.9C-59.6,-30.1,-58.8,-49.6,-48.7,-55.1C-38.6,-60.7,-19.3,-52.4,-4,-47.6C11.2,-42.8,22.5,-41.5,34.8,-36.3Z",
  "M49.4,-59.6C64.6,-46.2,77.8,-31.1,76.7,-16.6C75.7,-2,60.3,12,47.4,20.8C34.4,29.5,23.9,33.1,14.3,34.4C4.8,35.7,-3.8,34.8,-12.7,32.5C-21.6,30.3,-30.9,26.7,-45.2,18.2C-59.5,9.7,-78.9,-3.8,-82.8,-20.3C-86.7,-36.7,-75,-56.1,-58.6,-69.4C-42.3,-82.7,-21.1,-89.8,-2,-87.4C17.1,-85,34.2,-73.1,49.4,-59.6Z",
];

const PATH_VALUES = [...PATH_KEYFRAMES, PATH_KEYFRAMES[0]].join("; ");

const BLOB_CONFIGS: BlobConfig[] = [
  {
    id: 0,
    positions: [
      [-12, 26],
      [58, 8],
      [162, 32],
      [116, 84],
      [18, 64],
    ],
    duration: 26000,
    delay: 0,
    scale: 0.28,
    opacity: 0.55,
  },
  {
    id: 1,
    positions: [
      [138, 18],
      [188, 42],
      [174, 94],
      [118, 66],
      [78, 30],
    ],
    duration: 29000,
    delay: 1200,
    scale: 0.24,
    opacity: 0.5,
  },
  {
    id: 2,
    positions: [
      [84, -8],
      [126, 18],
      [188, 48],
      [138, 102],
      [62, 74],
    ],
    duration: 32000,
    delay: 2500,
    scale: 0.23,
    opacity: 0.52,
  },
  {
    id: 3,
    positions: [
      [28, 108],
      [94, 94],
      [174, 136],
      [104, 180],
      [8, 158],
    ],
    duration: 28000,
    delay: 800,
    scale: 0.34,
    opacity: 0.55,
  },
  {
    id: 4,
    positions: [
      [192, 118],
      [148, 166],
      [82, 150],
      [38, 138],
      [102, 118],
    ],
    duration: 34000,
    delay: 1600,
    scale: 0.27,
    opacity: 0.48,
  },
  {
    id: 5,
    positions: [
      [24, 150],
      [84, 174],
      [158, 192],
      [112, 134],
      [36, 122],
    ],
    duration: 30000,
    delay: 400,
    scale: 0.3,
    opacity: 0.44,
  },
  {
    id: 6,
    positions: [
      [-18, 82],
      [46, 62],
      [128, 84],
      [184, 118],
      [94, 138],
    ],
    duration: 31000,
    delay: 2100,
    scale: 0.26,
    opacity: 0.5,
  },
  {
    id: 7,
    positions: [
      [194, 52],
      [142, 28],
      [70, 42],
      [8, 34],
      [108, 66],
    ],
    duration: 27000,
    delay: 600,
    scale: 0.22,
    opacity: 0.58,
  },
  {
    id: 8,
    positions: [
      [62, 40],
      [18, 84],
      [74, 148],
      [152, 154],
      [198, 102],
    ],
    duration: 33000,
    delay: 1800,
    scale: 0.3,
    opacity: 0.52,
  },
  {
    id: 9,
    positions: [
      [106, 16],
      [172, 6],
      [206, 72],
      [142, 128],
      [64, 94],
    ],
    duration: 29500,
    delay: 900,
    scale: 0.28,
    opacity: 0.56,
  },
];

const buildTranslateValues = (points: Point[]) => {
  if (!points.length) return "";
  const sequence = [...points, points[0]];
  return sequence.map(([x, y]) => `${x} ${y}`).join("; ");
};

const SvgAnimated = () => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={cx("svgAnimated")}
    aria-hidden="true"
  >
    {BLOB_CONFIGS.map((blob) => (
      <g key={blob.id} opacity={blob.opacity}>
        <animateTransform
          attributeName="transform"
          type="translate"
          dur={`${blob.duration}ms`}
          begin={`${blob.delay}ms`}
          repeatCount="indefinite"
          values={buildTranslateValues(blob.positions)}
        />
        <g transform={`scale(${blob.scale})`}>
          <path fill="currentColor" d={PATH_KEYFRAMES[0]}>
            <animate
              attributeName="d"
              dur={`${Math.round(blob.duration * 0.85)}ms`}
              begin={`${blob.delay}ms`}
              repeatCount="indefinite"
              values={PATH_VALUES}
            />
          </path>
        </g>
      </g>
    ))}
  </svg>
);

export default SvgAnimated;
