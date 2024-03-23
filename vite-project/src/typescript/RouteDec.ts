export declare function Link(props: LinkProps): React.ReactElement;

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: To;
  preventScrollReset?: boolean;
  relative?: "route" | "path";
  reloadDocument?: boolean;
  replace?: boolean;
  state?: unknown;
  unstable_viewTransition?: boolean;
}

export type To = string | Partial<Path>;

export interface Path {
  pathname: string;
  search: string;
  hash: string;
}
