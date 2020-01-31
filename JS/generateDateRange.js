  public generateDateRange(sDate, eDate) {
    const startDate = new Date(sDate);
    const endDate = new Date(eDate);

    if (startDate !== undefined || endDate !== undefined) {
      if (startDate instanceof Date && endDate instanceof Date) {
        // get the date range via server
        const query = `[${startDate.toJSON()} TO ${endDate.toJSON()}]`;

        return query;
      } else {
	console.error('Enter a valid date');
      }
    } else {
      console.error('Insert a proper date range');
    }
  }