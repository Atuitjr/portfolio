import { useInView } from 'react-intersection-observer';
import { useAnimation, AnimationControls } from 'framer-motion';

export const useScroll = (): [any, AnimationControls] => {
    const controls: AnimationControls = useAnimation();
    const [element, view] = useInView({ threshold: 0.3 });
    if (view) {
        controls.start('show');
    } else {
        controls.start('hidden');
    }
    return [element, controls];
};
