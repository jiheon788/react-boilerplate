export const assignRouteProps = (props: any) => (typeof props === 'object' ? props : { path: props });
