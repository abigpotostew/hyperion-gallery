import { useEffect, useState } from "react";
import debounce from 'debounce';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const SIZE_XS: string = 'xs';
export const SIZE_SM: string = 'sm';
export const SIZE_MD: string = 'md';
export const SIZE_LG: string = 'lg';
export const SIZE_XL: string = 'xl';
export const SIZE_XXL: string = 'xxl';

export const gteBreakpoint = (value: string, bp: Breakpoint) => {
  if (bp === 'xs') {
    return value === 'xs' || value === 'sm' || value === 'md' || value === 'lg' || value === 'xl' || value === 'xxl';
  }
  if (bp === 'sm') {
    return value === 'sm' || value === 'md' || value === 'lg' || value === 'xl' || value === 'xxl';
  }
  if (bp === 'md') {
    return value === 'md' || value === 'lg' || value === 'xl' || value === 'xxl';
  }
  if (bp === 'lg') {
    return value === 'lg' || value === 'xl' || value === 'xxl';
  }
  if (bp === 'xl') {
    return value === 'xl' || value === 'xxl';
  }
  if (bp === 'xxl') {
    return value === 'xxl';
  }
}

export const lteBreakpoint = (value: string, bp: Breakpoint) => {
  if (bp === 'xs') {
    return value === 'xs';
  }
  if (bp === 'sm') {
    return value === 'xs' || value === 'sm';
  }
  if (bp === 'md') {
    return value === 'xs' || value === 'sm' || value === 'md';
  }
  if (bp === 'lg') {
    return value === 'xs' || value === 'sm' || value === 'md' || value === 'lg';
  }
  if (bp === 'xl') {
    return value === 'xs' || value === 'sm' || value === 'md' || value === 'lg' || value === 'xl';
  }
  if (bp === 'xxl') {
    return value === 'xs' || value === 'sm' || value === 'md' || value === 'lg' || value === 'xl' || value === 'xxl';
  }
}


const resolveBreakpoint = (width: number): Breakpoint => {
  if (width < 576) {
    return 'xs';
  } else if (width >= 576 && width < 768) {
    return 'sm';
  } else if (width >= 768 && width < 992) {
    return 'md';
  } else if (width >= 992 && width < 1200) {
    return 'lg';
  } else if (width >= 1200 && width < 1440) {
    return 'xl';
  } else if (width >= 1440) {
    return 'xxl';
  }
  return 'xs';
};

/** Get Media Query Breakpoints in React */
const useBreakpoint = (): Breakpoint => {
  const [size, setSize] = useState(768);

  useEffect(() => {
    const calcInnerWidth = debounce(function () {
      setSize(resolveBreakpoint(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return size;
};

export default useBreakpoint;