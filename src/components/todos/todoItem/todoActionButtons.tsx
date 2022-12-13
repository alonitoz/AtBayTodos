import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

type ActionButtonProps = {
	onRemove: () => void;
	onEditClick: () => void;
};

const TodoActionButtons = ({ onRemove, onEditClick }: ActionButtonProps) => {
	return (
		<>
			<Tooltip title="Edit">
				<IconButton sx={{ color: 'rgb(49, 197, 224)' }} onClick={onEditClick}>
					<EditIcon sx={{ fontSize: 20 }} />
				</IconButton>
			</Tooltip>
			<Tooltip title="Delete">
				<IconButton sx={{ color: '#ef96f0', fontSize: 12 }} onClick={onRemove}>
					<DeleteIcon sx={{ fontSize: 20 }} />
				</IconButton>
			</Tooltip>
		</>
	);
};

export default TodoActionButtons;
