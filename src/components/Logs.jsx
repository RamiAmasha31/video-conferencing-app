
    import React, { useState } from 'react';
    import Typography from '@mui/material/Typography';
    import Box from '@mui/material/Box';
    import TextField from '@mui/material/TextField';
    import Table from '@mui/material/Table';
    import TableContainer from '@mui/material/TableContainer';
    import TableHead from '@mui/material/TableHead';
    import TableBody from '@mui/material/TableBody';
    import TableRow from '@mui/material/TableRow';
    import TableCell from '@mui/material/TableCell';
    import TablePagination from '@mui/material/TablePagination';
    import Grid from '@mui/material/Grid';
    import SearchIcon from '@mui/icons-material/Search';
    import PdfIcon from '@mui/icons-material/PictureAsPdf';
    import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
    import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
    import Paper from '@mui/material/Paper';
    
    const Logs = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [page, setPage] = useState(0);
      const [rowsPerPage, setRowsPerPage] = useState(5);
      const [sortOrder, setSortOrder] = useState('asc');
    
      const pdfList = [
        { name: '1 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2023-04-01' },
        { name: '2 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2021-04-01' },
        { name: '3 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '20254-04-01' },
        { name: '4 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2026-05-06' },
        { name: '5 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-04-01' },
        { name: '6 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-09-07' },
        { name: '7 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-01-01' },
        { name: '8 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-04-09' },
        { name: '9 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-04-25' },
        { name: '10 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-08-15' },
        { name: '111 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-04-01' },
        { name: '13 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-08-01' },
        { name: '13 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2025-09-01' },
        { name: '13 test file', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', createdAt: '2022-03-02' },
    
    ];
      const handleChangeSearchTerm = (event) => {
        setSearchTerm(event.target.value);
        setPage(0); // Reset page when changing search term
      };
    
      const filteredPDFs = pdfList.filter((pdf) =>
        pdf.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
      const sortedPDFs = [...filteredPDFs].sort((a, b) => {
        if (sortOrder === 'asc') {
          return new Date(a.createdAt) - new Date(b.createdAt);
        } else {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
      });
    
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    
      const handleSort = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
      };

      return (
        <Box sx={{ padding: 4, backgroundImage: `url('https://source.unsplash.com/random/1920x1080')`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 2, borderRadius: 4 }}>
            <Typography variant="h1" sx={{ textAlign: 'center', marginBottom: 2 }}>Logs</Typography>
            <Typography variant="subtitle1" sx={{ textAlign: 'center', marginBottom: 2, color: 'black' }}>Here you can find transcriptions of all your meetings</Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12} md={6}>
                <TextField
                  label="Search"
                  placeholder="Search by name"
                  variant="outlined"
                  size="small"
                  value={searchTerm}
                  onChange={handleChangeSearchTerm}
                  fullWidth
                  InputProps={{
                    startAdornment: <SearchIcon />
                  }}
                  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                />
              </Grid>
            </Grid>
          </Box>
          <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Name
                  </TableCell>
                  <TableCell onClick={handleSort} style={{ cursor: 'pointer' }}>
                    Created At
                    {sortOrder === 'asc' ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedPDFs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((pdf, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <PdfIcon />
                      <a href={pdf.url} target="_blank" rel="noopener noreferrer" sx={{ ml: 1, textDecoration: 'none', color: 'inherit' }}>
                        {pdf.name}
                      </a>
                    </TableCell>
                    <TableCell>{pdf.createdAt}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 2, borderRadius: 4 }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={sortedPDFs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              color="primary"
              labelRowsPerPage="Rows per page:"
            />
          </Box>
        </Box>
      );
    };
    
    export default Logs;
    