import { Container, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Attribution = () => {
  const { t } = useTranslation();

  const translationAttribution = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {t('attribution.translatedBy')}{' '}
        <Link href={t('attribution.translatorLink')}>
          {t('attribution.translatorName')}
        </Link>
      </Typography>
    );
  };

  return (
    <Container>
      <Typography
        margin={4}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        Copyright © 2023 Wiredcraft Co. Ltd. | <Link href="https://wiredcraft.com/legal/notice/">Imprint</Link> | <Link href="https://wiredcraft.com/legal/privacy/">Privacy</Link> | created with Yopass
      </Typography>
      {t('attribution.translatorName') && translationAttribution()}
    </Container>
  );
};
