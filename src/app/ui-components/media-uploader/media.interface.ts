export interface IMedia {
    destination?: string;
    encoding?: string;
    fieldname?: string;
    filename?: string;
    id?: string;
    mimetype?: string;
    originalname?: string;
    path?: string;
    size?: number;
    progress? : {
      total?: number;
      loaded?: number;
      percent?: number;
      speed?: number;
      speedHumanized?: string;
    };
    done?: boolean;
    error?: boolean;
    abort?: boolean;
    startTime?: any;
    endTime?: any;
    speedAverage?: any;
    speedAverageHumanized?: any;
    Original?: string;
    Preview?: string;
    metadata?: {
      Blobcreationdatetime?: string,
      DeletedBy?: string,
      Environment?: string,
      LastModifiedById?: string,
      LastModifiedbyname?: string,
      Markedfordelete?: boolean,
      Notes?: string,
      Restorationid?: number,
      Sizename?: string,
      Submittedbyname?: string,
      Uploadingapp?: string,
      id?: string
    },
    submiterID?: string;
    lastModified?: number;
    lastModifiedDate?: any|Date;
    name?: string;
    type?: string;
    webkitRelativePath?: string;
};

// Original and below = image returned from Azure
