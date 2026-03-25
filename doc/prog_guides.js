var prog_guides =
[
    [ "Blobstore Programmer's Guide", "blob.html", [
      [ "In this document", "blob.html#blob_pg_toc", null ],
      [ "Target Audience", "blob.html#blob_pg_audience", null ],
      [ "Introduction", "blob.html#blob_pg_intro", null ],
      [ "Theory of Operation", "blob.html#blob_pg_theory", [
        [ "Abstractions", "blob.html#autotoc_md1239", null ],
        [ "Atomicity", "blob.html#autotoc_md1240", null ],
        [ "Callbacks", "blob.html#autotoc_md1241", null ],
        [ "Backend Support", "blob.html#autotoc_md1242", null ],
        [ "Metadata Operations", "blob.html#autotoc_md1243", null ],
        [ "Threads", "blob.html#autotoc_md1244", null ],
        [ "Channels", "blob.html#autotoc_md1245", null ],
        [ "Blob Identifiers", "blob.html#autotoc_md1246", null ]
      ] ],
      [ "Design Considerations", "blob.html#blob_pg_design", [
        [ "Initialization Options", "blob.html#autotoc_md1247", null ],
        [ "Sub-page Sized Operations", "blob.html#autotoc_md1248", null ],
        [ "Threads", "blob.html#autotoc_md1249", null ],
        [ "Data Buffer Memory", "blob.html#autotoc_md1250", null ],
        [ "Error Handling", "blob.html#autotoc_md1251", null ],
        [ "Asynchronous API", "blob.html#autotoc_md1252", null ],
        [ "Xattrs", "blob.html#autotoc_md1253", null ],
        [ "Synchronizing Metadata", "blob.html#autotoc_md1254", null ],
        [ "Iterating Blobs", "blob.html#autotoc_md1255", null ],
        [ "The Super Blob", "blob.html#autotoc_md1256", null ]
      ] ],
      [ "Examples", "blob.html#blob_pg_examples", null ],
      [ "Configuration", "blob.html#blob_pg_config", null ],
      [ "Component Detail", "blob.html#blob_pg_component", [
        [ "Media Format", "blob.html#autotoc_md1257", null ],
        [ "Blob cluster layout", "blob.html#blob_pg_cluster_layout", null ],
        [ "Thin Blobs, Snapshots, and Clones", "blob.html#autotoc_md1258", [
          [ "Thin Provisioning", "blob.html#blob_pg_thin_provisioning", null ],
          [ "Snapshots and Clones", "blob.html#blob_pg_snapshots", null ],
          [ "Inflating and Decoupling Clones", "blob.html#autotoc_md1259", null ],
          [ "External Snapshots and Esnap Clones", "blob.html#blob_pg_esnap_and_esnap_clone", null ],
          [ "Shallow Copy", "blob.html#blob_shallow_copy", null ],
          [ "Change the parent of a blob", "blob.html#blob_reparent", null ],
          [ "Copy-on-write", "blob.html#blob_pg_copy_on_write", null ]
        ] ],
        [ "Sequences and Batches", "blob.html#autotoc_md1260", null ],
        [ "Key Internal Structures", "blob.html#autotoc_md1261", null ],
        [ "Code Layout and Common Conventions", "blob.html#autotoc_md1262", null ]
      ] ]
    ] ],
    [ "Block Device Layer Programming Guide", "bdev_pg.html", [
      [ "Target Audience", "bdev_pg.html#autotoc_md1231", null ],
      [ "Introduction", "bdev_pg.html#autotoc_md1232", null ],
      [ "Basic Primitives", "bdev_pg.html#autotoc_md1233", null ],
      [ "Initializing The Library", "bdev_pg.html#autotoc_md1234", null ],
      [ "Discovering Block Devices", "bdev_pg.html#autotoc_md1235", null ],
      [ "Preparing To Use A Block Device", "bdev_pg.html#autotoc_md1236", null ],
      [ "Sending I/O", "bdev_pg.html#autotoc_md1237", null ],
      [ "Resetting A Block Device", "bdev_pg.html#autotoc_md1238", null ]
    ] ],
    [ "Writing a Custom Block Device Module", "bdev_module.html", [
      [ "Target Audience", "bdev_module.html#autotoc_md1225", null ],
      [ "Introduction", "bdev_module.html#autotoc_md1226", null ],
      [ "Creating A New Module", "bdev_module.html#autotoc_md1227", null ],
      [ "Creating Bdevs", "bdev_module.html#autotoc_md1228", null ],
      [ "Creating Bdevs in an External Repository", "bdev_module.html#autotoc_md1229", null ],
      [ "Creating Virtual Bdevs", "bdev_module.html#autotoc_md1230", null ]
    ] ],
    [ "NVMe over Fabrics Target Programming Guide", "nvmf_tgt_pg.html", [
      [ "Target Audience", "nvmf_tgt_pg.html#autotoc_md1270", null ],
      [ "Introduction", "nvmf_tgt_pg.html#autotoc_md1271", null ],
      [ "Primitives", "nvmf_tgt_pg.html#autotoc_md1272", null ],
      [ "The Basics", "nvmf_tgt_pg.html#autotoc_md1273", null ],
      [ "Access Control", "nvmf_tgt_pg.html#autotoc_md1274", null ],
      [ "Discovery Subsystems", "nvmf_tgt_pg.html#autotoc_md1275", null ],
      [ "Transports", "nvmf_tgt_pg.html#autotoc_md1276", null ],
      [ "Choosing a Threading Model", "nvmf_tgt_pg.html#autotoc_md1277", null ],
      [ "Scaling Across CPU Cores", "nvmf_tgt_pg.html#autotoc_md1278", null ],
      [ "Zero Copy Support", "nvmf_tgt_pg.html#autotoc_md1279", null ],
      [ "RDMA", "nvmf_tgt_pg.html#autotoc_md1280", null ]
    ] ],
    [ "Flash Translation Layer", "ftl.html", [
      [ "Terminology", "ftl.html#ftl_terminology", [
        [ "Logical to physical address map", "ftl.html#ftl_l2p", null ],
        [ "Band", "ftl.html#ftl_band", null ],
        [ "Non volatile cache", "ftl.html#ftl_nvcache", null ],
        [ "Garbage collection and relocation", "ftl.html#ftl_reloc", null ]
      ] ],
      [ "Metadata", "ftl.html#ftl_metadata", null ],
      [ "Dirty shutdown recovery", "ftl.html#ftl_dirty_shutdown", [
        [ "Shared memory recovery", "ftl.html#ftl_shm_recovery", null ],
        [ "Trim", "ftl.html#ftl_trim", null ]
      ] ],
      [ "Usage", "ftl.html#ftl_usage", [
        [ "Prerequisites", "ftl.html#ftl_prereq", null ],
        [ "FTL bdev creation", "ftl.html#ftl_create", null ]
      ] ],
      [ "FTL bdev stack", "ftl.html#ftl_bdev_stack", null ]
    ] ],
    [ "GDB Macros User Guide", "gdb_macros.html", [
      [ "Introduction", "gdb_macros.html#autotoc_md1263", null ],
      [ "Loading The gdb Macros", "gdb_macros.html#autotoc_md1264", null ],
      [ "Using the gdb Data Directory", "gdb_macros.html#autotoc_md1265", null ],
      [ "Using .gdbinit To Load The Macros", "gdb_macros.html#autotoc_md1266", null ],
      [ "Why Do We Need to Explicitly Call spdk_load_macros", "gdb_macros.html#autotoc_md1267", null ],
      [ "Macros available", "gdb_macros.html#autotoc_md1268", null ],
      [ "Adding New Macros", "gdb_macros.html#autotoc_md1269", null ]
    ] ],
    [ "Notify library", "notify.html", [
      [ "Register event types", "notify.html#notify_register", null ],
      [ "Get info about events", "notify.html#notify_get_info", null ],
      [ "Get new events", "notify.html#notify_listen", null ],
      [ "Send events", "notify.html#notify_send", null ],
      [ "RPC Calls", "notify.html#rpc_calls", null ]
    ] ]
];