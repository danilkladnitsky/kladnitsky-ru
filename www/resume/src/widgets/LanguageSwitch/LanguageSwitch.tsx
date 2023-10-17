import classNames from 'classnames';
import { Switch } from '@gravity-ui/uikit';

type Props = {
    className?: string;
}

export const LanguageSwitch = ({ className }: Props) => {
  return (
    <div className={classNames(className)}>
      <Switch content="En" size="l" />
    </div>
  )
}
