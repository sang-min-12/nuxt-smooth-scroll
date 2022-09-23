import { inject, Ref } from 'vue';

const useScrollTo = () => {
  const scroll = inject<Ref>('scroll');

  return (target: string) => {
    scroll?.value?.scrollTo(document.querySelector(target), {
    });
  };
};

export default useScrollTo;