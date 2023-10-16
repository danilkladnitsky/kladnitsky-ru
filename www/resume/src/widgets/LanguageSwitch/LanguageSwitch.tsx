import { Switch, Button } from '@mantine/core';
import classNames from 'classnames';

type Props = {
    className?: string;
}

export const LanguageSwitch = ({ className }: Props) => {
  return (
    <div className={classNames(className)}>
      <Switch label="English" />
      <Button>Test</Button>
    </div>
  )
}
