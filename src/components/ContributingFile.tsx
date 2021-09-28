/* @jsx Md */
import Md, {Fragment, Heading, Link, LineBreak, Component} from "jsx-md";

interface Props {
  codeOfConductFilePath?: string
}

/** Work in progress for rendering the contributing file. */
export const ContributingFile: Component<Props> = ({codeOfConductFilePath}: Props) => {
  return <Fragment>
    <Heading level={1}>Introduction</Heading>
    {`Thanks for your interest in contributing! This repository is free open
source and as such dependent on your contributions. These guidelines should help
you get started more quickly and should ensure a smooth contribution process for
both those contributing and those reviewing contributions. Please read them
thoroughly before contributing with a Pull Request, and at least skim them before adding an issue.`}

    <LineBreak/>
    <LineBreak/>

    {codeOfConductFilePath
      ? <Fragment>We are open to all kinds of contributions as long as you follow our<LineBreak/>
        <Link to={codeOfConductFilePath}>Code of Conduct</Link>. </Fragment>
      : <Fragment>We are open to all kinds of contributions.<LineBreak/></Fragment>}

    {`For very specific use case it might make more sense
though to create your own repository instead of adding to this one.`}
  </Fragment>
}
