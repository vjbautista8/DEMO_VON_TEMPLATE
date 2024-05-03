import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
// routes
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
// utils
import { fDateTime } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { shortDateLabel } from 'src/components/custom-date-range-picker';
import Carousel, { CarouselArrowIndex, CarouselArrows, useCarousel } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function TourItem({ tour, onView, onEdit, onDelete }) {
  const popover = usePopover();

  const {
    id,
    name,
    price,
    images,
    bookers,
    createdAt,
    available,
    priceSale,
    destination,
    ratingNumber,
  } = tour;

  const shortLabel = shortDateLabel(available.startDate, available.endDate);

  const renderRating = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        top: 8,
        right: 8,
        zIndex: 9,
        borderRadius: 1,
        position: 'absolute',
        p: '2px 6px 2px 4px',
        typography: 'subtitle2',
        bgcolor: 'warning.dark',
      }}
    >
      <Iconify icon="solar:bookmark-linear" sx={{ color: 'warning.lighter', mr: 0.25 }} /> Could Not
      Locate
    </Stack>
  );

  const renderPrice = (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        top: 8,
        left: 8,
        zIndex: 9,
        borderRadius: 1,
        bgcolor: 'grey.800',
        position: 'absolute',
        p: '2px 6px 2px 4px',
        color: 'common.white',
        typography: 'subtitle2',
      }}
    >
      {/* {!!priceSale && (
        <Box component="span" sx={{ color: 'grey.500', mr: 0.25, textDecoration: 'line-through' }}>
          {fCurrency(priceSale)}
        </Box>
      )}
      {fCurrency(price)} */}
      <Iconify icon="solar:tag-price-bold" sx={{ color: 'primary.main' }} />
      Brand New
    </Stack>
  );

  const renderImages = (
    <Stack
      spacing={0.5}
      direction="row"
      sx={{
        p: (theme) => theme.spacing(1, 1, 0, 1),
      }}
    >
      <Stack flexGrow={1} sx={{ position: 'relative' }}>
        {renderPrice}
        {renderRating}
        <Image
          alt={images[0]}
          src="https://vjbautista8.github.io/DEMO_VON_TEMPLATE/assets/camry_1.jpg"
          sx={{ borderRadius: 1, height: 164, width: 1 }}
        />
      </Stack>
      {/* <Stack spacing={0.5}>
        <Image
          alt={images[1]}
          src="/assets/camry_1.jpg"
          ratio="1/1"
          sx={{ borderRadius: 1, width: 80 }}
        />
        <Image
          alt={images[2]}
          src="/assets/camry_1.jpg"
          ratio="1/1"
          sx={{ borderRadius: 1, width: 80 }}
        />
      </Stack> */}
    </Stack>
  );

  const renderTexts = (
    <ListItemText
      sx={{
        p: (theme) => theme.spacing(2.5, 2.5, 2, 2.5),
      }}
      primary={`Date in Stock: ${fDateTime(createdAt)}`}
      secondary={
        <Link component={RouterLink} href={paths.dashboard.tour.details(id)} color="inherit">
          {/* {name} */}
          20004331A | 2015 | Toyota | Camry
        </Link>
      }
      primaryTypographyProps={{
        typography: 'caption',
        color: 'text.disabled',
      }}
      secondaryTypographyProps={{
        mt: 1,
        noWrap: true,
        component: 'span',
        color: 'text.primary',
        typography: 'subtitle1',
      }}
    />
  );

  const renderInfo = (
    <>
      <Stack
        spacing={1.5}
        sx={{
          position: 'relative',
          p: (theme) => theme.spacing(0, 2.5, 2.5, 2.5),
        }}
      >
        <IconButton onClick={popover.onOpen} sx={{ position: 'absolute', bottom: 20, right: 8 }}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>

        {[
          {
            label: '1665 West Colfax Ave, Golden , CO, 80401',
            icon: <Iconify icon="mingcute:location-fill" sx={{ color: 'error.main' }} />,
          },
          {
            label: '0 | 9',
            icon: <Iconify icon="solar:clock-circle-bold" sx={{ color: 'info.main' }} />,
          },
          {
            label: '$83,740',
            icon: <Iconify icon="solar:tag-price-bold" sx={{ color: 'primary.main' }} />,
          },
        ].map((item) => (
          <Stack
            key={item.label}
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            {item.icon}
            {item.label}
          </Stack>
        ))}
      </Stack>
    </>
  );
  const renderInfo1 = (
    <>
      <Stack
        spacing={1.5}
        sx={{
          position: 'relative',
          p: (theme) => theme.spacing(0, 2.5, 2.5, 2.5),
        }}
      >
        {/* <IconButton onClick={popover.onOpen} sx={{ position: 'absolute', bottom: 20, right: 8 }}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton> */}
        {[
          {
            label: 'Execute Action B ?',
            icon: (
              <Iconify icon="solar:checklist-minimalistic-broken" sx={{ color: 'error.main' }} />
            ),
          },
        ].map((item) => (
          <Stack
            key={item.label}
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            {item.icon}
            {item.label}
          </Stack>
        ))}

        <Grid
          xs={12}
          md={8}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Button
            variant="contained"
            startIcon={<Iconify icon="solar:clipboard-remove-bold" sx={{ color: 'error.main' }} />}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<Iconify icon="solar:verified-check-bold" sx={{ color: 'success.main' }} />}
          >
            Yes
          </Button>
        </Grid>
      </Stack>
    </>
  );
  const renderInfo2 = (
    <>
      <Stack
        spacing={1.5}
        sx={{
          position: 'relative',
          p: (theme) => theme.spacing(0, 2.5, 2.5, 2.5),
        }}
      >
        {/* <IconButton onClick={popover.onOpen} sx={{ position: 'absolute', bottom: 20, right: 8 }}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton> */}
        {[
          {
            label: 'Execute Action A ?',
            icon: (
              <Iconify icon="solar:checklist-minimalistic-broken" sx={{ color: 'error.main' }} />
            ),
          },
        ].map((item) => (
          <Stack
            key={item.label}
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ typography: 'body2' }}
          >
            {item.icon}
            {item.label}
          </Stack>
        ))}

        <Grid
          xs={12}
          md={8}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Button
            variant="contained"
            startIcon={<Iconify icon="solar:clipboard-remove-bold" sx={{ color: 'error.main' }} />}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<Iconify icon="solar:verified-check-bold" sx={{ color: 'success.main' }} />}
          >
            Yes
          </Button>
        </Grid>
      </Stack>
    </>
  );

  const carousel = useCarousel({
    autoplay: false,
    initialSlide: 1,
    infinite: false,
  });
  const data = [
    { title: 'test', coverUrl: '', id: 1 },
    { title: 'test', coverUrl: '', id: 2 },
    { title: 'test', coverUrl: '', id: 3 },
  ];
  return (
    <>
      <Card>
        {renderImages}
        {renderTexts}

        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          {renderInfo2}
          {renderInfo}
          {renderInfo1}
        </Carousel>
      </Card>
      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
            onView();
          }}
        >
          <Iconify icon="solar:eye-bold" />
          View
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            onEdit();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            onDelete();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>
      {/* <Card>
        <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
          <Stack key={`${id}-1`}>
            <Card>
              {renderImages}

              {renderTexts}

              {renderInfo}
            </Card>
            <CustomPopover
              open={popover.open}
              onClose={popover.onClose}
              arrow="right-top"
              sx={{ width: 140 }}
            >
              <MenuItem
                onClick={() => {
                  popover.onClose();
                  onView();
                }}
              >
                <Iconify icon="solar:eye-bold" />
                View
              </MenuItem>

              <MenuItem
                onClick={() => {
                  popover.onClose();
                  onEdit();
                }}
              >
                <Iconify icon="solar:pen-bold" />
                Edit
              </MenuItem>

              <MenuItem
                onClick={() => {
                  popover.onClose();
                  onDelete();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon="solar:trash-bin-trash-bold" />
                Delete
              </MenuItem>
            </CustomPopover>
          </Stack>
         
        </Carousel>
        <CarouselArrowIndex
          index={carousel.currentIndex}
          total={data.length}
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
        />
      </Card> */}
    </>
  );
}

TourItem.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
  tour: PropTypes.object,
};
