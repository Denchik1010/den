import { memo } from 'preact/compat';

import { createClassName } from '../../../helpers/createClassName';
import { MessageBubble } from '../MessageBubble';
import styles from './styles.scss';

export const ImageAttachment = memo(({ url, className, ...messageBubbleProps }) => (
	<MessageBubble nude className={createClassName(styles, 'image-attachment', {}, [className])} {...messageBubbleProps}>
		<img src={url} className={createClassName(styles, 'image-attachment__inner')} />
	</MessageBubble>
));
