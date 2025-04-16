import IdentityCheck from '../../components/forms/IdentityCheck'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function AppoimentCancellationPage() {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="outlined"
        onClick={() =>
          navigate(`/`)
        }
        sx={{ mb: 2 }}
      >
        ← Anasayfaya Dön
      </Button>
      <IdentityCheck />
    </>
  )
}

export default AppoimentCancellationPage