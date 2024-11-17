import dynamic from 'next/dynamic';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

// Dynamically import BallCanvas
const BallCanvas = dynamic(() => import('./canvas/Ball'), { ssr: false });

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
